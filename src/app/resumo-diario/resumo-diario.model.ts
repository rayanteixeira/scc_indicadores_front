export class Sococo {
    titulo: string;
    coco_processado: number;
    coco_desfibrado: number;
    cri: number;
    flococo: number;
    oleo_ind_a: number;
    oleo_ind_ete: number;
    torta: number;
    constructor(
        coco_processado?: number,
        coco_desfibrado?: number,
        cri?: number,
        flococo?: number,
        oleo_ind_a?: number,
        oleo_ind_ete?: number,
        torta?: number
    ) {
        this.titulo = 'Produção Sococo';
        this.coco_processado = coco_processado;
        this.coco_desfibrado = coco_desfibrado;
        this.cri = cri;
        this.flococo = flococo;
        this.oleo_ind_a = oleo_ind_a;
        this.oleo_ind_ete = oleo_ind_ete;
        this.torta = torta
    }
}

export class Acqua {
    titulo: string;
    agua_coco_sococo: number;
    agua_coco_verde: number;
    porcentagem_coco_germinado: number;
    total_cacambas: number;
    caixa_padrao: number;
    constructor(
        agua_coco_sococo?: number,
        agua_coco_verde?: number,
        porcentagem_coco_germinado?: number,
        total_cacambas?: number,
        caixa_padrao?: number,
    ) {
        this.titulo = 'Produção Acqua';
        this.agua_coco_sococo = agua_coco_sococo;
        this.agua_coco_verde = agua_coco_verde;
        this.porcentagem_coco_germinado = porcentagem_coco_germinado;
        this.total_cacambas = total_cacambas;
        this.caixa_padrao = caixa_padrao;
    }
}

export class Amafibra {
    titulo: string;
    numero_fardos: number;

    constructor(
        numero_fardos?: number
    ) {
        this.titulo = 'Produção Amafibra';
        this.numero_fardos = numero_fardos
    }
}

export class Lancamento {

    cocosProcessados: number;
    cocosDesfibrados: number;
    cri;
    flococo;
    oleoIndustrialTipoA;
    oleoIndustrialETE;
    torta;
    aguaDeCocoSococo;
    aguaDeCocoVerde;
    procentagemCocoGerminado;
    totalDeCacambas;
    caixaPadrao;
    numeroDeFardos;
    constructor() { }
}

export class ResumoDiario {

    constructor(
        public dataLancamento?: Date,
        public cocosDesfibrados?: number,
        public cocosProcessados?: number,
        public cri?: number,
        public flococo?: number,
        public oleoIndustrialETE?: number,
        public oleoIndustrialTipoA?: number,
        public torta?: number,

        public aguaDeCocoSococo?: number,
        public aguaDeCocoVerde?: number,
        public porcentagemCocoGerminado?: number,
        public caixaPadrao?: number,
        public totalDeCacambas?: number,
        public numeroDeFardos?: number,

    ) {
        this.cocosProcessados = 0;
        this.cocosDesfibrados = 0;
        this.cocosProcessados = 0;
        this.cri = 0;
        this.flococo = 0;
        this.oleoIndustrialETE = 0;
        this.oleoIndustrialTipoA = 0;
        this.torta = 0;
        this.aguaDeCocoSococo = 0;
        this.aguaDeCocoVerde = 0;
        this.porcentagemCocoGerminado = 0;
        this.caixaPadrao = 0;
        this.totalDeCacambas = 0;
        this.numeroDeFardos = 0;
    }

}


export class TabelaResumosDiarios {

    public resumosDiarios?: ResumoDiario[];
    public resumosMensal?: ResumoDiario[];
    public buscaSemanal?: any[];
    constructor(
        resumosDiarios: ResumoDiario[],
        resumosMensal?: ResumoDiario[],
        buscaSemanal?: any[]
    ) { }
}
