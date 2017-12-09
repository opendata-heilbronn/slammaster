import { Injectable } from '@angular/core';
import * as AdmZip from 'adm-zip';
import { DialogService } from './dialog.service';
import * as path from 'path';
import { Buffer } from 'buffer';
import { Stream } from 'stream';

declare var fs;
declare var archiver;

@Injectable()
export class ExportService {

    private version: string = '1.0.0';

    private fs: any = fs;

    private archiver: any = archiver;



    private ZipFiles(targetName: string, files: string[]): void {
        let output = this.fs.createWriteStream(targetName);
        let archive = this.archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => {
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
        });
        output.on('end', () => {
            console.log('Data has been drained');
        });
        archive.on('warning', (err) => {
            if (err.code === 'ENOENT') {
                // log warning
            } else {
                // throw error
                throw err;
            }
        });
        archive.on('error', (err) => {
            throw err;
        });
        
        archive.pipe(output);

        files.forEach((item) => {
            archive.append(fs.createReadStream(item), { name: path.basename(item) });            
        });

        let buffer = new Buffer(this.version, 'utf-8');
        archive.append( buffer, { name: 'version.txt' });

        archive.finalize();
    }

    export(files: string[]): void {
        const file = this.dialogService.showSaveDialog({ filters: [ { extensions: ['zip'] } ]}, ( filename ) => {
            this.ZipFiles(filename, files);
        });
    }

    constructor(private dialogService: DialogService) { }
}
