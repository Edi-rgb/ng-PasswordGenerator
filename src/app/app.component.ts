import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {

  /* Title it's just for error from app.component.spec */
  title = ''
  /* All property */

  password = ''
  length = 0
  includeLetters = false
  includeNumbers = false
  includeSymbols = false

  /* Methods for update state of property from false to true and vice versa when generate button is clicked  */
  onChangeUseLetters(){
    this.includeLetters =! this.includeLetters
  }

  onChangeUseNumbers(){
    this.includeNumbers =! this.includeNumbers
  }

  onChangeUseSymbols(){
    this.includeSymbols =! this.includeSymbols
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue))
    this.length = parsedValue

  }
  /* variables for Passowrd Generator  */
  onButtonClick (){
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnoprstuvz'
    const symbols = '<>()[]*'

    let validChars = ''

    /* include or not letters, numbers or symbols in generate */

    if(this.includeLetters) {
      validChars += letters
    }
    if(this.includeNumbers){
      validChars += numbers
    }
    if(this.includeSymbols){
      validChars += symbols
    }


    /* Background Logic */

    let generatePassword = '';
    for(let i = 0; i< this.length; i++){
      const index = Math.floor(Math.random() * validChars.length)
      generatePassword += validChars[index]
    }


    this.password = generatePassword
      

  }

  


}

