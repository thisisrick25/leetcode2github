function getFileExtension(lang) {
    const langMap = {
        'bash': 'sh',
        'c': 'c',
        'cpp': 'cpp',
        'csharp': 'cs',
        'golang': 'go',
        'java': 'java',
        'javascript': 'js',
        'kotlin': 'kt',
        'mysql': 'sql',
        'mssql': 'sql',
        'oraclesql': 'sql',
        'php': 'php',
        'python': 'py',
        'python3': 'py',
        'ruby': 'rb',
        'rust': 'rs',
        'scala': 'scala',
        'swift': 'swift',
        'typescript': 'ts',
    };
    return langMap[lang] || 'txt';
}

module.exports = {
    getFileExtension,
};
