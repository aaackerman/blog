const settings = {
  'workbench.colorTheme': 'Solarized Dark',
  'javascript.format.insertSpaceAfterConstructor': true,
  'javascript.format.insertSpaceBeforeFunctionParenthesis': true,
  'emmet.triggerExpansionOnTab': true,
  'emmet.includeLanguages': {
    javascript: 'javascriptreact'
  },
  'editor.tabCompletion': 'on',
  'editor.tabSize': 2,
  'editor.formatOnSave': true,
  'editor.formatOnPaste': true,
  'editor.defaultFormatter': 'esbenp.prettier-vscode',
  'editor.formatOnType': true,
  'editor.fontFamily': "Dank Mono, Menlo, Monaco, 'Courier New', monospace",
  'editor.fontSize': 14,
  'editor.fontLigatures': true,
  'editor.tokenColorCustomizations': {
    textMateRules: [
      {
        scope: [
          'comment',
          'constant.language',
          'entity.name.type.class',
          'keyword',
          'constant',
          'variable.language',
          'storage.type',
          'storage.modifier',
          'storage.type.class.js',
          'storage.type.enum',
          'storage.type.interface'
        ],
        settings: {
          fontStyle: 'italic'
        }
      },
      {
        scope: [
          'invalid',
          'keyword.operator',
          'constant.numeric.css',
          'keyword.other.unit.px.css',
          'constant.numeric.decimal.js',
          'constant.numeric.json'
        ],
        settings: {
          fontStyle: ''
        }
      }
    ]
  },
  'window.zoomLevel': 0,
  'workbench.iconTheme': 'material-icon-theme',
  'editor.minimap.enabled': false,
  'workbench.editor.enablePreviewFromQuickOpen': false,
  'explorer.openEditors.visible': 0,
  'prettier.trailingComma': 'none'
};

export default settings;
