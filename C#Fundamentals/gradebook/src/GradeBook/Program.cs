// See https://aka.ms/new-console-template for more information

//Virker som man kan behandle dette som en python x java typ greie
// Console.WriteLine("Hello, World!"); //Denne kan vi også bruke nå virker det som


//using System; //Trenger tydeligvis ikke denne

namespace GradeBook {
    class Program {
        static void Main(String[] args) {

            var book = new Book("My grade book");
            book.AddGrade(89.1);
            book.AddGrade(1.1);
            book.AddGrade(67.1);
            book.AddGrade(12.1);
            book.AddGrade(33.1);
            
            var grades = new List<Double> { 12.7, 10.3, 6.11, 4.1 };
            grades.Add(56.1);
            book.showStats();


        }
    }

}

/*
int a = 2;
Console.WriteLine(a);
 */