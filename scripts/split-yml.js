const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2];

if (!inputFile) {
    console.error('Merci de fournir un fichier YAML en argument.\nExemple : node split-yml.js questions.yml');
    process.exit(1);
}

try {
    const fileContent = fs.readFileSync(inputFile, 'utf8');

    const rawBlocks = fileContent
        .split(/^-\s+question:/gm)
        .filter(Boolean)

    const baseName = path.basename(inputFile, path.extname(inputFile));
    const outputDir = path.join(process.cwd(), baseName);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    rawBlocks.forEach((blockContent, index) => {
        const fullBlock = `- question:${blockContent}`;
        const outputPath = path.join(outputDir, `question_${index + 1}.yml`);
        fs.writeFileSync(outputPath, fullBlock.trimStart(), 'utf8');
        console.log(`Fichier écrit : question_${index + 1}.yml`);
    });

    console.log(`\nTerminé ! ${rawBlocks.length} fichier(s) exporté(s) dans ${outputDir}`);
} catch (err) {
    console.error('Erreur de traitement du fichier :', err.message);
    process.exit(1);
}
