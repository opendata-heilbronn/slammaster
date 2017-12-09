import { Injectable } from '@angular/core';
import * as AdmZip from 'adm-zip';
import { DialogService } from './dialog.service';
import * as path from 'path';

declare var fs;
declare var node_temp;
declare var archiver;

@Injectable()
export class StorageService {

    private fs: any = fs;
    private temp: any = node_temp;

    private stat: any = fs.statSync;
    private archiver: any = archiver;

    private archive: any;
    private output: any;

    private OnZipClose(): void {
        console.log(this.archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    }

    private OnZipEnd(): void {
        console.log('Data has been drained');
    }

    private OnZipWarning(err: any): void {
        if (err.code === 'ENOENT') {
            // log warning
        } else {
            // throw error
            throw err;
        }
    }

    private OnZipError(err): void {
        throw err;
    }

    private ZipFiles(targetName: string, files: string[]): void {
        this.output = fs.createWriteStream(targetName);
        this.archive = archiver('zip', { zlib: { level: 9 } });

        this.output.on('close', this.OnZipClose);
        this.output.on('end', this.OnZipEnd);
        this.archive.on('warning', this.OnZipWarning);
        this.archive.on('error', this.OnZipError);
        
        this.archive.pipe(this.output);

        files.forEach((item) => {
            this.archive.append(fs.createReadStream(item), { name: path.basename(item) });            
        });

        this.archive.finalize();
    }

    save(): void {

        let files: string[] = this.dialogService.showOpenDialog({ properties: ['openFile'] });

        const file = this.dialogService.showSaveDialog({ filters: [ { extensions: ['zip'] } ]}, ( filename ) => {
            this.ZipFiles(filename, files);
        });
        

    }

    readFileSync(path:any) :any {
        return this.fs.readFileSync(path);
    }

    constructor(private dialogService: DialogService) { }
}
