import { urlChecker } from '../src/client/js/urlChecker';

describe('testing the function validateURL()', () => {
    var url = "https://www.valentinog.com/blog/jest/";
       test('Returns true on valid url', async () => {
           const response = urlChecker(url);
           expect(response).toBe(true);
           expect(response).toBeDefined();
       })
       //it('Returns false on invalid url', () => {
       //    expect(response).toBe(false);
       //});
   })

