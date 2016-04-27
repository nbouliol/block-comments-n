'use babel';

// import BlockCommentsNView from './block-comments-n-view';
import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'block-comments-n:comment': () => this.comment()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  comment(){
        editor = atom.workspace.getActiveTextEditor();
       if (editor){
          selection = editor.getSelectedText();
          if (selection.indexOf("/*") != -1 && selection.indexOf("*/") != -1){
            selection = selection.replace("/*", "");
            selection = selection.replace("*/", "");
          }
          else
            selection = "/*" + selection + "*/";
          editor.insertText(selection);
        }
    }

};
