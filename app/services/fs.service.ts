import { Injectable } from '@angular/core';

declare var fs;

@Injectable()
export class FsService {

    private fs: any = fs;

    private projectPath: string;

    readFileSync(path:any) :any {
        return this.fs.readFileSync(path);
    }

    constructor() { }

}
