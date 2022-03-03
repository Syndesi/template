import fs from 'fs';
import sass from 'sass';
import Mustache from 'mustache';
import {format} from 'date-fns';
import AdmZip from 'adm-zip';



console.log('generating CSS file...');
let css = sass.compile('./style/index.scss').css;
let cssTemplate = fs.readFileSync('./style.css.mustache').toString();
let cssFile = Mustache.render(cssTemplate, {
    css: css,
    date: format(new Date(), "yyyy.MM.dd HH:mm:ss")
});


console.log('writing template files...');
let templates = fs.readdirSync('./templates/');
templates.forEach((template) => {
    let path = `./templates/${template}`;
    console.log(`writing files for ${path}...`);
    // write style.css
    fs.writeFileSync(`${path}/style.css`, cssFile);
    // write index.html
    let demo = Mustache.render(
        fs.readFileSync(`${path}/index.mustache.html`).toString(),
        JSON.parse(fs.readFileSync(`${path}/demo.json`).toString()));
    fs.writeFileSync(`${path}/demo.html`, demo);


    // export folder to dist
    const zip = new AdmZip();
    const outputFile = `./dist/${template}.zip`;
    zip.addLocalFolder(path);
    zip.writeZip(outputFile);
});


console.log('finished');