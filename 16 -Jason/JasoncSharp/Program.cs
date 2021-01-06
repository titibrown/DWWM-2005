using System;

//https://www.youtube.com/watch?v=tCM63nMetaU&list=PLrSOXFDHBtfGBHAMEg9Om9nF_7R7h5mO7&index=10&ab_channel=FormationVid%C3%A9o
namespace App
// Utiliser une structure : Besoin d'une info personalisé , aucune modification requise apès alors Oui 
{
 public struct Disk //Public
    {
       public string Brand; public  int Capacity; // En Go
       public Disk (string brand, int capacity)
       {
            Brand = brand;
            Capacity = capacity;

       }
       public override string ToString() => $"disque de marque {Brand}, d'une capacité de {Capacity}GO."; // réecriture
    }
      
/* class Base{

    static void Main(string[] args)
    {
        Disk d = new Disk("Toshiba", 1000);
        Disk d2 = new Disk("western Digital",5000);

        //d.Brand = " Seagate";
        //d.Capacity = 2000;

    Console.WriteLine(d);
   // Console.WriteLine(d2.capacity);
    }
}*/

class Base
{

static void Main(string[] args)
{
    Stock stock_disks = new stock(100);
    Stock stocks_mouses = new Stock(25);

    Console.WriteLine();
}


}


}








