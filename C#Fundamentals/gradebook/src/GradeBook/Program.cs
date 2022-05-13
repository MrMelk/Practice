// See https://aka.ms/new-console-template for more information

//Virker som man kan behandle dette som en python x java typ greie
// Console.WriteLine("Hello, World!"); //Denne kan vi også bruke nå virker det som


//using System; //Trenger tydeligvis ikke denne

namespace GradeBook {
    class Program {
        static void Main(String[] args) {

            Random rand = new Random();
            int[] studentGrades = new int[1000];
            for (int i = 0; i < 1000; i++) {
                studentGrades[i] = rand.Next(0, 101);
            }
            Console.WriteLine($"Highest grade is {studentGrades.Max()}");
            Console.WriteLine($"Average grade is {studentGrades.Sum()/studentGrades.Length}");
            Console.WriteLine($"Lowest grade is {studentGrades.Min()}");

        }
    }
}

/*
int a = 2;
Console.WriteLine(a);
 */