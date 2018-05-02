import { Component, OnInit } from '@angular/core';
import Apoiador from './models/apoiador.model';
import { ApoiadorService } from './services/apoiador.service';

@Component({
  selector: 'app-apoiadores',
  templateUrl: './apoiadores.component.html',
  styleUrls: ['./apoiadores.component.scss']
})
export class ApoiadoresComponent implements OnInit {

  apoiadoresList: Apoiador[];
  meses: IDictionary[];
  mesCorrente: number;
  anoCorrente: number;
  constructor(private apoiadoresService: ApoiadorService) {
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

    this.apoiadoresService.getApoiadores(String(this.anoCorrente),
                                      String(this.mesCorrente)).subscribe(campanhas => {
      this.apoiadoresList = campanhas;
    });
  }

  ngOnInit(): void {
    this.mesCorrente = new Date().getUTCMonth() + 1;
    this.anoCorrente = new Date().getFullYear();
    this.apoiadoresService.getApoiadores().subscribe(campanhas => {
      this.apoiadoresList = campanhas;
    });

  }

}

interface IDictionary {
  [index: number]: string;
}
