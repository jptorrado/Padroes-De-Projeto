// 1. A interface comum para todos os produtos
interface Transporte {
    entregar(): string;
}

// 2. Implementações concretas dos produtos
class Caminhao implements Transporte {
    entregar(): string {
        return "Entrega terrestre por caixa em um Caminhão.";
    }
}

class Navio implements Transporte {
    entregar(): string {
        return "Entrega marítima por contêiner em um Navio.";
    }
}

// 3. A classe Criadora declara o Factory Method
abstract class Logistica {
    // O Factory Method
    public abstract criarTransporte(): Transporte;

    // A lógica principal que depende do produto
    public planejarEntrega(): string {
        const transporte = this.criarTransporte();
        return `Logística: Planejando a entrega. ${transporte.entregar()}`;
    }
}

// 4. Criadores Concretos sobrescrevem o Factory Method
class LogisticaRodoviaria extends Logistica {
    public criarTransporte(): Transporte {
        return new Caminhao();
    }
}

class LogisticaMaritima extends Logistica {
    public criarTransporte(): Transporte {
        return new Navio();
    }
}

// Uso do Padrão
function codigoCliente(logistica: Logistica) {
    console.log(logistica.planejarEntrega());
}

codigoCliente(new LogisticaRodoviaria()); // Saída: Entrega terrestre...
codigoCliente(new LogisticaMaritima());   // Saída: Entrega marítima...