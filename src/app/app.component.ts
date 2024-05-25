import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  useChar = false;
  useNumbers = false;
  useSymbols = false;
  length = 0;
  password = '';

  onButtonClick() {
    this.password = '';

    const numbers = '1234567890';
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    
    if (this.useChar) {
      validChars += chars;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      this.password += validChars[index];
    }

  }

  getPassword() {
    return this.password;
  }

  onChangeUseLetters() {
    this.useChar = !this.useChar;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }


  onChangeLength(eventTarget: EventTarget): void {
    const parsedValue: string = (eventTarget as HTMLInputElement).value;


    const parsedLength = parseInt(parsedValue);

    if (!isNaN(parsedLength)) {
      this.length = parsedLength;
    }
  }
}
