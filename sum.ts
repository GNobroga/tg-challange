
//3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
export default function sum(size: number): number {
    if ((size - 1) === 0) return 0;
    return size + sum(size - 1);
}
