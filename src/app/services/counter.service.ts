import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'}) // tre sa fie app wide pt ca il injectezi in alt service
export class CounterService {
  increaseCounter(previousCount: number) {
    return previousCount + 1;
  }
}
