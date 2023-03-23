let backpack  = []

backpack.push('jacket','waterBottle','snack','sunGlasses')

let jacket = backpack.splice(0,1)

let inventory = backpack.slice()

let fannyPack = backpack.splice(0,2)
console.log(fannyPack)

backpack.unshift('coolstick','funny rock')

console.log(backpack)

let sunGl = ''

for(i=0;i<backpack.length;i++)
{
    console.log(backpack[i])
    if (backpack[i] === 'sunGlasses' )

}
