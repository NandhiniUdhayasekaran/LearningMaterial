/*Numeric Enums*/
enum Week{
    Sunday, //0
    Monday, //1
    Tuesday,  //2
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

/*Custom enums*/
enum Weekend {
    Friday = 1,
    Saturday,
    Sunday
  }

  /*String Enums*/
  enum Marvel{
      Tony = 'Iron Man',
      Scarlett = 'Black Widow',
      Ruffalo = 'Hulk'
  }

  /*Heterogeneous Enum*/
  enum  Numbers{
      one=1,
      two='TWO',
      three=3
  }

  /*Computed Enums*/
  enum Area {
    square = 1,
    semicircle = getarea(3),
    circle = semicircle * 2
  }
  
  function getarea(r : number): number {
      if (r !=null) {
          return 3.14*r*r;
      }
  }
  Area.square; // returns 3
  Area.circle; // returns 120