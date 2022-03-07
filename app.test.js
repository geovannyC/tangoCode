const component1 = require('./components/component1/component1')
test('should to print true', () => {
    expect(component1.test()).toBeTruthy();
});
describe("testing component1",()=>{
    test('should print 9', () => { 
        const param_value = "20191224"
        const expected = 9
        const fnCodeVerificator = component1.codeVerificator(arr)
        expect(fnCodeVerificator).toBe(expected);
     })
    test('should print OK', () => { 
        const param_value = "BRMA20191224-9"
        const expected= "OK"
        const fnCheckDigitVerification = component1.checkDigitVerification(param_value)
        expect(fnCheckDigitVerification).toBe(expected);
     })
    test('should print NOT VALID', () => { 
        const param_value = "SUJA202132189-1"
        const expected= "NOT VALID"
        const fnCheckDigitVerification = component1.checkDigitVerification(param_value)
        expect(fnCheckDigitVerification).toBe(expected);
     })
    test('should print OK', () => { 
        const param_value = "CAJO2022091459-2"
        const expected= "OK"
        const fnCheckDigitVerification = component1.checkDigitVerification(param_value)
        expect(fnCheckDigitVerification).toBe(expected);
     })
    test('should print NOT VALID', () => { 
        const param_value = "MATA2022091459-2"
        const expected= "NOT VALID"
        const fnCheckDigitVerification = component1.checkDigitVerification(param_value)
        expect(fnCheckDigitVerification).toBe(expected);
     })
    test('should print NOT VALID', () => { 
        const param_value = "FRSI2022091459-8"
        const expected= "NOT VALID"
        const fnCheckDigitVerification = component1.checkDigitVerification(param_value)
        expect(fnCheckDigitVerification).toBe(expected);
     })
})