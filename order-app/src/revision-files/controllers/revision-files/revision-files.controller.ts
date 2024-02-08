import {
  Controller,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { RevisionFilesService } from 'src/revision-files/services/revision-files/revision-files.service';

@Controller('revision-files')
export class RevisionFilesController {
  constructor(private readonly revisionFileService: RevisionFilesService) {}

  @Post(':orderId/upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadRevisionFiles(
    @Param('orderId') orderId: number,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.revisionFileService.uploadRevisionFiles(orderId, files);
  }
}
