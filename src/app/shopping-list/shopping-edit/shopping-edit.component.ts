import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientValue = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientValue);

    this.ingredientAdded.emit(newIngredient);
  }
}
