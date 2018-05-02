import { Component, OnInit } from '@angular/core';
import { CampanhaService } from './services/campanha.service';
import Campanha from './models/campanha.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  campanhaList: Campanha[];
  meses: IDictionary[];
  mesCorrente: number;
  anoCorrente: number;
  constructor(private campanhaService: CampanhaService) {
    this.meses = [];
    this.meses[1] = 'Janeiro';
    this.meses[2] = 'Fevereiro';
    this.meses[3] = 'Março';
    this.meses[4] = 'Abril';
    this.meses[5] = 'Maio';
    this.meses[6] = 'Junho';
    this.meses[7] = 'Julho';
    this.meses[8] = 'Agosto';
    this.meses[9] = 'Setembro';
    this.meses[10] = 'Outubro';
    this.meses[11] = 'Novembro';
    this.meses[12] = 'Dezembro';
   }

  linkApoiadores (): void {
    alert('não implementado!');
  }

  changeMonth(mesSubs: number): void {
    if (mesSubs === 13) {
      this.anoCorrente += 1;
      this.mesCorrente = 1;
    }
    if (mesSubs === 0) {
      this.anoCorrente -= 1;
      this.mesCorrente = 12;
    } else {
      this.mesCorrente = mesSubs;
    }

    this.campanhaService.getCampanhas(String(this.anoCorrente),
                                      String(this.mesCorrente)).subscribe(campanhas => {
      this.campanhaList = campanhas;
    });
  }

  ngOnInit(): void {
    this.mesCorrente = new Date().getUTCMonth() + 1; // meses em javascript começam em zero!! ¬¬
    this.anoCorrente = new Date().getFullYear();
    this.campanhaService.getCampanhas().subscribe(campanhas => {
      this.campanhaList = campanhas;
    });

  }

}

interface IDictionary {
  [index: number]: string;
}
