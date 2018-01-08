import { Injectable } from '@angular/core';

declare var fs;

@Injectable()
export class FsService {

    private fs: any = null; // = fs;

    private projectPath: string;

    readFileSync(path:any) :any {
        if (this.fs == null) {
            console.warn('fileservice not available');
            return;
        }
        
        return this.fs.readFileSync(path);
    }

    constructor() {
        try {
            this.fs = fs;
        } catch (err) {
            console.warn("file service not available");
        }
    }

}
