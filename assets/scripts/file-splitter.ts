import {showMessage} from "./helper/show-message";

const fileInput = document.getElementById('yamlFileSplitter') as HTMLInputElement;
const errorMessage = document.getElementById('errorMessage') as HTMLDivElement;
const successMessage = document.getElementById('successMessage') as HTMLDivElement;

fileInput.addEventListener('change', async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!file) {
        return;
    }

    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith('.yml') && !fileName.endsWith('.yaml')) {
        showMessage('Please select a valid YAML file (.yml or .yaml)', true);
        target.value = '';
        return;
    }

    try {
        const fileContent = await readFileAsText(file);
        const splitFiles = splitYamlContent(fileContent);

        if (splitFiles.length === 0) {
            showMessage('No questions found in the YAML file.', true);
            return;
        }

        const baseName = file.name.replace(/\.(yml|yaml)$/i, '');
        splitFiles.forEach((content, index) => {
            downloadFile(`${baseName}_${index + 1}.yml`, content);
        });

        showMessage(`Success ! ${splitFiles.length} file(s) downloaded.`, false);
        target.value = '';

    } catch (err) {
        showMessage(`Error during file processing : ${err instanceof Error ? err.message : 'Unknown error'}`, true);
        target.value = '';
    }
});

function readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                resolve(e.target.result as string);
            } else {
                reject(new Error('Failed to read file'));
            }
        };
        reader.onerror = () => reject(new Error('Error reading file'));
        reader.readAsText(file);
    });
}

function splitYamlContent(content: string): string[] {
    const rawBlocks = content
        .split(/^-\s+question:/gm)
        .filter(block => block.trim().length > 0);

    return rawBlocks.map(blockContent => {
        const fullBlock = `- question:${blockContent}`;
        return fullBlock.trimStart();
    });
}

function downloadFile(filename: string, content: string): void {
    const blob = new Blob([content], {type: 'text/yaml;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}