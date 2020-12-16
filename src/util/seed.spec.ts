import {sentenceToSeed, seedToSentence} from './seed'
describe('Seed', () => {
  test('with 1 word', () => {
    const input = "TEST"
    const seed = sentenceToSeed(input)
    const output = seedToSentence(seed)
    expect(output).toBe(input)
  })

  test('works with multiple words', () => {
    const input = "THIS IS A TEST"
    const seed = sentenceToSeed(input)
    const output = seedToSentence(seed)
    expect(output).toBe(input)
  })

  test('works with a long sentence', () => {
    const input = "THIS IS A MUCH LONGER TEST THAN THE OTHERS BUT PROBABLY STILL IS NOT AS LONG AS A GOOD TEST SHOULD BE BUT HEY HO"
    const seed = sentenceToSeed(input)
    const output = seedToSentence(seed)
    expect(output).toBe(input)
  })
})
