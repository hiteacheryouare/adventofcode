const day2data = `516015-668918,222165343-222281089,711089-830332,513438518-513569318,4-14,4375067701-4375204460,1490-3407,19488-40334,29275041-29310580,4082818-4162127,12919832-13067769,296-660,6595561-6725149,47-126,5426-11501,136030-293489,170-291,100883-121518,333790-431800,897713-983844,22-41,42727-76056,439729-495565,43918886-44100815,725-1388,9898963615-9899009366,91866251-91958073,36242515-36310763`
const parsedDay2Data = day2data.split(',')
let doubleParse: string[] = []
parsedDay2Data.forEach(e => {
    let [start, end] = e.split('-').map(Number)
    for (let n = start; n <= end; n++) {
        doubleParse.push(String(n))
    }
})
let invalidNums: number[] = []
doubleParse.forEach(e => {
    let trimmed = e.replace(/^0+/, "")
    if (trimmed.length === 0) return
    if (trimmed.length % 2 !== 0) return
    const half = trimmed.length / 2
    const first = trimmed.slice(0, half)
    const second = trimmed.slice(half)
    if (first === second) {
        invalidNums = [...invalidNums, parseInt(trimmed)]
    }
})

let sumOfInvalids = 0
invalidNums.forEach(inv => sumOfInvalids += inv)
console.log(`sum of invalids: ${sumOfInvalids}`);

// part 2
// includes not only repeat twice but repeat at least twice
let invalidNumsPart2: number[] = []
doubleParse.forEach(e => {
    let trimmed = e.replace(/^0+/, "")
    if (trimmed.length === 0) return
    const s = trimmed
    const L = s.length
    for (let len = 1; len <= L / 2; len++) {
        if (L % len !== 0) continue
        const base = s.slice(0, len)
        const repetitions = L / len
        let ok = true
        for (let r = 1; r < repetitions; r++) {
            if (s.slice(r * len, (r + 1) * len) !== base) {
                ok = false
                break
            }
        }
        if (ok && repetitions >= 2) {
            invalidNumsPart2.push(parseInt(trimmed))
            break
        }
    }
})
let sumOfInvalidsPart2 = 0
invalidNumsPart2.forEach(inv => sumOfInvalidsPart2 += inv)
console.log(`sum of invalids part 2: ${sumOfInvalidsPart2}`);