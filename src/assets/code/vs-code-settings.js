const settings = {
  'workbench.colorTheme': 'Solarized Dark',
  'javascript.format.insertSpaceAfterConstructor': true,
  'javascript.format.insertSpaceBeforeFunctionParenthesis': true,
  'prettier.requireConfig': true,
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
          //following will be in italic (=FlottFlott)
          'comment',
          'entity.name.type.class', //class names
          'keyword', //import, export, return…
          'constant', //String, Number, Boolean…, this, super
          'storage.modifier', //static keyword
          'storage.type.class.js' //class keyword
        ],
        settings: {
          fontStyle: 'italic'
        }
      },
      {
        scope: [
          //following will be excluded from italics (VSCode has some defaults for italics)
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
  'explorer.openEditors.visible': 0
};

export default settings;
