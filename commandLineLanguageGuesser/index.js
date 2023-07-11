import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';
const input = process.argv[2]; // gives lang code inputted
const code = franc(input);
if (code === 'und') {
    console.log('Sorry, language could not be identified'.red);
} else {
    const language = langs.where('3', code);
    console.log(`Your language is ${language.name}`.rainbow);
}