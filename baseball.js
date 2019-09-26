//baseball

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {

  public static ArrayList<int[]> box = new ArrayList<>();

  public static void main(String[] args) {
  Scanner sc = new Scanner(System.in);
  //총 몇개의 숫자를 입력 받을 것인지
  int a = 0;
  int[] b = new int[3];
  int strike = 0;
  int ball = 0;

  a = sc.nextInt();

  for(int i = 1;  i <= 9 ; i++) {

  for(int j = 1; j<= 9 ; j++) {
  if(i != j) {

  for(int k = 1 ; k <= 9 ; k++) {
  if(k != i && k != j) {
  int[] z = new int[3];
  z[0] = i ; z[1] = j ; z[2] = k;
  box.add(z);
//                            System.out.println(i+""+j+""+k);
}
}
}
}
}


for(int i = 0 ; i < a ; i++) {
  int input = sc.nextInt();
  strike = sc.nextInt();
  ball = sc.nextInt();

  int back = input/100;
  int sip = (input - (back*100))/10;
  int il = input - (back*100) - (sip*10);

  b[0] = back; b[1] = sip; b[2] = il;

  for(int j = 0; j < box.size(); j++) {
    if(!isGood(b,ball,strike,box.get(j))) {
      box.remove(j);
      j--;


    }

  }

}

System.out.print(box.size());


}

public static boolean isGood(int[] input, int ball, int strike, int[] answer) {

  int s = 0;
  int b = 0;

  for(int i = 0 ; i < 3 ; i++) {
    if(input[i] == answer[i]) s++;
    if(input[i] == answer[(i+2)%3]) b++;
    if(input[i] == answer[(i+1)%3]) b++;
  }

  if(s == strike && b == ball) return true;

  return false;
}


}


