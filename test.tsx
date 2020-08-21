export default class TestSonarLint
{

    constructor(){
        var j = 0;
        while (true) { // Noncompliant; constant end condition
             j++;
        }

      if(j == 'howdy')
      {

      }
        
    }

    
}
