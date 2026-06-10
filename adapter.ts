// 1. A interface que nossa aplicação entende (Alvo)
class SistemaDeAnalytics {
    public processarDadosJSON(dadosJson: string): string {
        return `Processando JSON: ${dadosJson}`;
    }
}

// 2. A biblioteca de terceiros (Serviço Incompatível)
class BibliotecaDeGraficosXML {
    public gerarGraficoXML(dadosXml: string): string {
        return `Gerando gráfico com dados XML: ${dadosXml}`;
    }
}

// 3. O Adaptador que faz a ponte
class AdaptadorJSONparaXML extends SistemaDeAnalytics {
    private bibliotecaXml: BibliotecaDeGraficosXML;

    constructor(bibliotecaXml: BibliotecaDeGraficosXML) {
        super();
        this.bibliotecaXml = bibliotecaXml;
    }

    // Sobrescrevemos o método para aceitar JSON, traduzir e enviar para a lib XML
    public processarDadosJSON(dadosJson: string): string {
        // Simulação de conversão de JSON para XML
        const dadosConvertidosParaXml = `<xml><data>${dadosJson.replace(/[{}]/g, '')}</data></xml>`;
        
        return this.bibliotecaXml.gerarGraficoXML(dadosConvertidosParaXml);
    }
}

// Uso do Padrão
const bibliotecaTerceiros = new BibliotecaDeGraficosXML();
const adaptador = new AdaptadorJSONparaXML(bibliotecaTerceiros);

// Nossa aplicação continua chamando o método JSON, sem saber que por baixo dos panos vira XML
console.log(adaptador.processarDadosJSON("{ ticker: 'AAPL', preco: 150 }"));