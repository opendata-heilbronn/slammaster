import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoetService } from './repositories/poet.service';
import { FsService } from './services/fs.service';
import { DialogService } from './services/dialog.service';
import { ExportService } from './services/export.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // Repositories
    PoetService,

    // Services
    FsService,
    DialogService,
    ExportService
  ]
})
export class AppCommonModule { }
