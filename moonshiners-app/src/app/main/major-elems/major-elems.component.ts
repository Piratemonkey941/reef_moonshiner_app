

import { Component, ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
import { ElementCalculatorService } from 'src/app/shared/element-calculator.service';
// import { BigFourComponent } from '../big-four/big-four.component';
import { VolumeService } from 'src/app/shared/volume.service';
declare var window: any;

@Component({
  selector: 'app-major-elems',
  templateUrl: './major-elems.component.html',
  styleUrls: ['./major-elems.component.scss']
})
export class MajorElemsComponent implements OnInit {

  formModal:any;                              // something for modal
  selectedElement: string = ''

  @Input() receivedValue: String;
  @Input() volume: number
  constructor(public volumeService: VolumeService) { }


  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )


  }

  // MODAL CODE

    openModal(){
      this.formModal.show();
    }

    closeModal(){
      this.formModal.hide();
    }


// ==================================================== BORON ====================================================

boron: number
boronStart: string = 'Are you a metal or not?!'

boronAdjustment: number
boronAdjustmentTotal: number
boronDays: number
boronQuantityDivisor: number


onAddBoron(){ // for basic calculation on card

// general boron calculation
this.boronDays = Math.ceil(6 - this.boron)   // 2
this.boronQuantityDivisor = (6 - this.boron) // 6 - 4.5 = 1.5
this.boronAdjustmentTotal = (0.9464 * this.volumeService.volume) * this.boronQuantityDivisor // 94.64
this.boronAdjustment = this.boronAdjustmentTotal / this.boronDays


  if (this.boron == 6){
      this.boronStart = 'Ideal Boron for most reefs'
  }
//low start  9.46ml at 100 g for 0.1 ppm increase
// 94.64ml per day for 1 ppm recovery
  else if ( this.boron <= 2 && this.boron >= 0 ){
    this.boronStart = `Boron low, adjust  ${this.boronAdjustment}ml per day for ${this.boronDays} days.  `
  }
  else if ( this.boron <= 5.9 && this.boron >= 2.1 ){
    this.boronStart = `Boron slighty low, adjust ${this.boronAdjustment}ml per day for ${this.boronDays} days.`
    }
  //high start
  else if ( this.boron <= 6.5  && this.boron >= 6.1){
    this.boronStart = 'Acceptable Range However RM method recomends adjusting to 6 '
  }
  else if ( this.boron <= 8  && this.boron >= 6.6 ){
    this.boronStart = 'Boron slightly elevated recomendation is to allow level to settle down and watch ICP '
  }
  else if ( this.boron <= 10  && this.boron >= 8.1 ){
    this.boronStart = 'Boron critically elevated recomendation is to allow level to settle down and watch ICP '
  }
  else if ( this.boron <= 20 && this.boron >= 10.1 ){
    this.boronStart = 'Boron extremely elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
  }
  else {
    this.boronStart = 'Retest parameter'
  }
}

// ==================================================== BROMIDE ====================================================

bromide: number
bromideStart: string = 'Are you a metal or not?!'

bromideAdjustment: number
bromideAdjustmentTotal: number
bromideDays: number
bromideQuantityDivisor: number

  onAddBromide(){

      // general boron calculation
      this.bromideDays = Math.ceil(6 - this.bromide)   // 2
      this.bromideQuantityDivisor = (85 - this.bromide) // 6 - 4.5 = 1.5
      this.bromideAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.bromideQuantityDivisor // 94.64
      this.bromideAdjustment = this.bromideAdjustmentTotal / this.bromideDays


        if (this.bromide == 85){
            this.bromideStart = 'Ideal Bromide for most reefs'
        }
      //low start  9.46ml at 100 g for 0.1 ppm increase
      // 94.64ml per day for 1 ppm recovery
        else if ( this.bromide <= 45 && this.bromide >= 0 ){
          this.bromideStart = `Bromide depleted, adjust  ${this.bromideAdjustment}ml per day for ${this.bromideDays} days.`
        }
        else if ( this.bromide <= 80 && this.bromide >= 46 ){
          this.bromideStart = `Bromide low, adjust  ${this.bromideAdjustment}ml per day for ${this.bromideDays} days.  `
        }
        else if ( this.bromide <= 84 && this.bromide >= 81){
          this.bromideStart = `Bromide slighty low, adjust ${this.bromideAdjustment}ml per day for ${this.bromideDays} days.`
          }
        //high start
        else if ( this.bromide <= 100  && this.bromide >= 86){
          this.bromideStart = 'Bromide slightly elevated recomendation is to allow level to settle down and watch ICP '
        }
        else if ( this.bromide <= 120  && this.bromide >= 101 ){
          this.bromideStart = 'Bromide critically elevated, do not exede 110/120. Recomended: allow level to settle down and watch ICP '
        }
        else if ( this.bromide <= 150 && this.bromide >= 121 ){
          this.bromideStart = 'Bromide extremely elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
        }
        else {
          this.bromideStart = 'Retest parameter'
        }
      }

  // ==================================================== POTASSIUM ====================================================

  potassiumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  potassium: number
  potassiumAdjustment: any
  potassiumAdjustmentTotal: number
  potassiumDays: number
  potassiumQuantityDivisor: number

  onAddPotassium(){

      // general boron calculation
      this.potassiumDays = Math.ceil(410 - this.potassium)   // 2
      this.potassiumQuantityDivisor = (410 - this.potassium) // 410 - 4.5 = 1.5
      this.potassiumAdjustmentTotal = (0.0772 * this.volumeService.volume) * this.potassiumQuantityDivisor
      this.potassiumAdjustment = this.potassiumAdjustmentTotal / this.potassiumDays


        if (this.potassium == 410){
            this.potassiumStart = 'Ideal  for most reefs'
        }
      //low start  7.72ml at 100 g for 0.1 ppm increase

        else if ( this.potassium <= 330 && this.potassium >= 250){
          this.potassiumStart = `Depleted Potassium Level, Correct immedietly ${this.potassiumAdjustment}ml per day for ${this.potassiumDays} days.  `
        }
        else if ( this.potassium <= 381 && this.potassium >= 331 ){
          this.potassiumStart = `Very Low Potassium Level, adjust  ${this.potassiumAdjustment}ml per day for ${this.potassiumDays} days.  `
        }
        else if ( this.potassium <= 400 && this.potassium >= 381 ){
          this.potassiumStart = `Reduced Potassium, adjust  ${this.potassiumAdjustment}ml per day for ${this.potassiumDays} days.  `
        }
        else if ( this.potassium <= 409 && this.potassium >= 401 ){
          this.potassiumStart = `Potassium optimal, adjust ${this.potassiumAdjustment}ml per day for ${this.potassiumDays} days.`
          }

        //high start
        else if ( this.potassium <= 420  && this.potassium >= 411){
          this.potassiumStart = 'Potassium Range Optimal '
        }
        else if ( this.potassium <= 500  && this.potassium >= 421 ){
          this.potassiumStart = 'Potassium slightly elevated recomendation is to allow level to settle down and watch ICP '
        }
        else if ( this.potassium <= 600  && this.potassium >= 501 ){
          this.potassiumStart = 'Potassium extremely elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
        }
        else {
          this.potassiumStart = 'Retest parameter'
        }
      }

// ==================================================== STRONTIUM ====================================================
strontiumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
strontium: number
strontiumAdjustment: any
strontiumAdjustmentTotal: number
strontiumDays: number
strontiumQuantityDivisor: number

onAddStrontium(){

    // general boron calculation
    this.strontiumDays = Math.ceil(410 - this.strontium)   // 2
    this.strontiumQuantityDivisor = (410 - this.strontium) // 410 - 4.5 = 1.5
    this.strontiumAdjustmentTotal = (0.0701 * this.volumeService.volume) * this.strontiumQuantityDivisor
    this.strontiumAdjustment = this.strontiumAdjustmentTotal / this.strontiumDays


      if (this.strontium == 10){
          this.strontiumStart = 'Ideal  for most reefs'
      }
    //low start  7.72ml at 100 g for 0.1 ppm increase

      else if ( this.strontium <= 3 && this.strontium >= 0){
        this.strontiumStart = `Depleted strontium Level, Correct immedietly ${this.strontiumAdjustment}ml per day for ${this.strontiumDays} days.  `
      }
      else if ( this.strontium <= 6 && this.strontium >= 3.1 ){
        this.strontiumStart = `Low strontium level, adjust  ${this.strontiumAdjustment}ml per day for ${this.strontiumDays} days.  `
      }
      else if ( this.strontium <= 9 && this.strontium >= 6.1 ){
        this.strontiumStart = `Reduced strontium, adjust  ${this.strontiumAdjustment}ml per day for ${this.strontiumDays} days.  `
      }
      else if ( this.strontium <= 9.9 && this.strontium >= 9.1 ){
        this.strontiumStart = `Optimal Range for strontium, adjust ${this.strontiumAdjustment}ml per day for ${this.strontiumDays} days.`
        }

      //high start
      else if ( this.strontium <= 12  && this.strontium >= 10.1){
        this.strontiumStart = 'Strontium Range Optimal '
      }
      else if ( this.strontium <= 25  && this.strontium >= 12.1 ){
        this.strontiumStart = 'Strontium slightly elevated recomendation is to allow level to settle down and watch ICP '
      }
      else if ( this.strontium <= 60  && this.strontium >= 25.1 ){
        this.strontiumStart = 'Strontium critical! elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
      }
      else {
        this.strontiumStart = 'Retest parameter'
      }
    }

// ==================================================== SULFATE ====================================================

sulfateStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
sulfate: number

onAddSulfate(){
      if ( this.sulfate <= 2800 && this.sulfate >= 2251 )
      {
        this.sulfateStart = 'Sulfate Range Optimal '
      }
      else if ( this.sulfate <= 2250 && this.sulfate >= 1201)
      {
        this.sulfateStart = 'Very low Sulfate levels. Can be a result of low salinity'
      }
      else if ( this.sulfate <= 1200 && this.sulfate >= 0)
      {
        this.sulfateStart = 'Extremely low Sulfate levels. Can be a result of low salinity'
      }

      else if ( this.sulfate <= 3300  && this.sulfate >= 2801 )
      {
        this.sulfateStart = 'Sulfate slightly elevated if salinity is in range'
      }
      else if ( this.sulfate <= 3500  && this.sulfate >= 3301 )
      {
        this.sulfateStart = 'Sulfate very elevated if salinity is in range'
      }
      else {
        this.sulfateStart = 'Retest parameter'
      }
    }


    // sulfateAdjustment: any
// sulfateAdjustmentTotal: number
// sulfateDays: number
// sulfateQuantityDivisor: number

  // general boron calculation
    // this.sulfateDays = Math.ceil(410 - this.sulfate)   // 2
    // this.sulfateQuantityDivisor = (410 - this.sulfate) // 410 - 4.5 = 1.5
    // this.sulfateAdjustmentTotal = (0.0772 * this.volumeService.volume) * this.sulfateQuantityDivisor
    // this.sulfateAdjustment = this.sulfateAdjustmentTotal / this.sulfateDays


  // onAddTemp(){}

  // calciumStart: string = 'A broken bone can heal, so can the Reef'
  // calcium: number
  // calciumAdjustment: any

  // magnesiumStart: string = 'Instead of becoming fireworks, Im going to make your corals glow!'
  // magnesium: number
  // magnesiumAdjustment: any


}



// BLANK TEMPLATE
// : number
// Start: string = 'Are you a metal or not?!'

// Adjustment: number
// AdjustmentTotal: number
// Days: number
// QuantityDivisor: number

//   onAddBromide(){

//       // general boron calculation
//       this.Days = Math.ceil(6 - this.)   // 2
//       this.QuantityDivisor = (6 - this.) // 6 - 4.5 = 1.5
//       this.AdjustmentTotal = (0.9464 * this.volumeService.volume) * this.QuantityDivisor // 94.64
//       this.Adjustment = this.AdjustmentTotal / this.Days


//         if (this. == 6){
//             this.Start = 'Ideal  for most reefs'
//         }
//       //low start  9.46ml at 100 g for 0.1 ppm increase
//       // 94.64ml per day for 1 ppm recovery
//         else if ( this. <= 2 && this. >= 0 ){
//           this.Start = ` low, adjust  ${this.Adjustment}ml per day for ${this.Days} days.  `
//         }
//         else if ( this. <= 5.9 && this. >= 2.1 ){
//           this.Start = ` slighty low, adjust ${this.Adjustment}ml per day for ${this.Days} days.`
//           }
//         //high start
//         else if ( this. <= 6.5  && this. >= 6.1){
//           this.Start = 'Acceptable Range However RM method recomends adjusting to 6 '
//         }
//         else if ( this. <= 8  && this. >= 6.6 ){
//           this.Start = ' slightly elevated recomendation is to allow level to settle down and watch ICP '
//         }
//         else if ( this. <= 10  && this. >= 8.1 ){
//           this.Start = ' critically elevated recomendation is to allow level to settle down and watch ICP '
//         }
//         else if ( this. <= 20 && this. >= 10.1 ){
//           this.Start = ' extremely elevated recomendation is preform several small water changes. 20% water change to reduce level apx 10%'
//         }
//         else {
//           this.Start = 'Retest parameter'
//         }
//       }


// console.log(this.volumeService.volume)

// console.log(this.boronDays)
// console.log(this.boronQuantityDivisor)
// console.log(this.boronAdjustmentTotal)
// console.log(this.boronAdjustment)


  // onAddVolume(){

  //   let volume = this.volume

  //   this.volumeStart = `Your Reef is ${volume} gallons`

  //   console.log(this.volume)
  //   return volume
  // }

//SALINITY

  // salinityStart: string = 'The cure for anything is salt water: sweat, tears or the sea.'
  // salinity: number

  // onAddSalinity(){

  //   let salinity = this.salinityStart

  //   if (this.salinity <= 35 && this.salinity >= 33){

  //       this.salinityStart = 'Salnity is acceptable'
  //     }
  //   else if ( this.salinity <= 32.9 && this.salinity >= 29 ){

  //     this.salinityStart = 'Salnity is lower then expected'
  //     }
  //   else if ( this.salinity <= 38  && this.salinity >= 35.1 ){

  //     this.salinityStart = 'Salnity is sligtly higher then expected'
  //    }
  //   else if ( this.salinity <= 45  && this.salinity >= 38.1 ){

  //     this.salinityStart = 'Salnity is sligtly higher then expected'
  //     }
  //   else {

  //     this.salinityStart = 'Retest parameter'
  //   }
  // }
