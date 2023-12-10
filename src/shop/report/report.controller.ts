import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('shop/admin/reports')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get()
  async getReport() {
    return await this.reportService.generateReport();
  }
}
