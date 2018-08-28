export class Sococo {
    titulo: string;
    coco_processado: string;
    coco_desfibrado: string;
    cri: string;
    flococo: string;
    oleo_ind_a: string;
    oleo_ind_ete: string;
    torta: string;
    constructor(
        coco_processado?: string,
        coco_desfibrado?: string,
        cri?: string,
        flococo?: string,
        oleo_ind_a?: string,
        oleo_ind_ete?: string,
        torta?: string
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
    agua_coco_sococo: string;
    agua_coco_verde: string;
    porcentagem_coco_germinado: any;
    total_cacambas: string;
    caixa_padrao: string;
    constructor(
        agua_coco_sococo?: string,
        agua_coco_verde?: string,
        porcentagem_coco_germinado?: any,
        total_cacambas?: string,
        caixa_padrao?: string,
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
    numero_fardos: string;

    constructor(
        numero_fardos?: string
    ) {
        this.titulo = 'Produção Amafibra';
        this.numero_fardos = numero_fardos
    }
}

export class Lancamento {

    cocosProcessados: string;
    cocosDesfibrados: string;
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
    constructor() {}
}

export class ResumoDiario {

    constructor(
        public dataLancamento?: Date,
        public cocosDesfibrados?: string,
        public cocosProcessados?: string,
        public cri?: string,
        public flococo?: string,
        public oleoIndustrialETE?: string,
        public oleoIndustrialTipoA?: string,
        public torta?: string,

        public aguaDeCocoSococo?: string,
        public aguaDeCocoVerde?: string,
        public porcentagemCocoGerminado?: string,
        public caixaPadrao?: string,
        public totalDeCacambas?: string,
        public numeroDeFardos?: string,

    ) { 
        this.cocosProcessados = '0';
        this.cocosDesfibrados = '0';
        this.cocosProcessados = '0';
        this.cri = '0';
        this.flococo = '0';
        this.oleoIndustrialETE = '0';
        this.oleoIndustrialTipoA = '0';
        this.torta = '0';
        this.aguaDeCocoSococo = '0';
        this.aguaDeCocoVerde = '0';
        this.porcentagemCocoGerminado = '0';
        this.caixaPadrao = '0';
        this.totalDeCacambas = '0';
        this.numeroDeFardos = '0';
    }

}


export class TabelaResumosDiarios {

    public resumosDiarios?: ResumoDiario[];
    public resumosMensal?: ResumoDiario[];
    public buscaSemanal?: any [];
    constructor(
        resumosDiarios: ResumoDiario[],
        resumosMensal?: ResumoDiario[],
        buscaSemanal?: any[]
    ) {}
}
