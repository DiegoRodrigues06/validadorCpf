/*
 * não sabia bulhufas de javascript, então 
 * eu fiz primeiro o codigo em java e depois
 * passei para o javascripters.
 */

import java.util.*;

public class ValidarCPF {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("digita seu cpf ai pra eu ver uma coisa rs:");
        String cpf = sc.nextLine();
        
        String cpfNumerico = cpf.replaceAll("\\D", ""); // não sei como isso funciona, mas funciona
        int[] cpfArray = new int[11];
        for (int i = 0; i < 11; i++) {
            cpfArray[i] = Character.getNumericValue(cpfNumerico.charAt(i));
        }

        // Cálculo do primeiro dígito verificador
        int decrescente = 10;
        int numPos = 0;
        for (int i = 0; i < 9; i++) {
            numPos += cpfArray[i] * decrescente--;
        }
        int resto = numPos % 11;
        int digitoVerificador = (resto < 2) ? 0 : 11 - resto; // top 10 otimizações brabas essa coisa

        // Cálculo do segundo dígito verificador
        int decrescente2 = 11;
        int numPos2 = 0;
        for (int i = 0; i < 9; i++) {
            numPos2 += cpfArray[i] * decrescente2--;
        }
        numPos2 += digitoVerificador * 2;
        int resto2 = numPos2 % 11;
        int digitoVerificador2 = (resto2 < 2) ? 0 : 11 - resto2;

        System.out.println("digito verificador 1 : " + digitoVerificador);
        System.out.println("digito verificador 2 : " + digitoVerificador2);
        
        // Compara os dígitos verificadores com os 2 últimos dígitos do cpf
        int penultimoDigito = cpfArray[9];  
        int ultimoDigito = cpfArray[10];   

        System.out.println("penúltimo dígito (do CPF): " + penultimoDigito);
        System.out.println("ultimo dígito (do CPF): " + ultimoDigito);

        if (digitoVerificador == penultimoDigito && digitoVerificador2 == ultimoDigito) {
            System.out.println("seu CPF é válido.");
        } else {
            System.out.println("seu CPF não é válido.");
        }

        sc.close();
    }
}


