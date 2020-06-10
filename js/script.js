const EditorJS = require('@editorjs/editorjs');

// Action tool that is used to generate a default action, also known as the default state.
class ActionTool {
    // Labeling it on the toolbox.
    static get toolbox() {
        return {
            // Name that will appear under toolbox.
            title: 'Action',
            // HTML/image that will embed the icon on the toolbar. Path is releative to the HTML document, not the script.
            icon: '<img id="custom-tool" src="img/tools/letter-a.png"></img>'
        }
    }

    render() {
        // Divs are necessary for block-style elements.
        var actionElement = document.createElement('div');
        // This is necessary for my script template CSS to work.
        // 'action' comes from my script. 'cdx-block' comes from editorjs to keep tidy.
        actionElement.setAttribute('class', 'action cdx-block');
        // This allows you to type into the DOM after creation.
        actionElement.contentEditable = true;
        // This will focus the cursor into it immediately after creation.
        actionElement.focus();
        // This appends the HTML into the document. Now ready for typing!
        return actionElement;
    }
}

// Scene Heading
class SceneTool {
    static get toolbox() {
        return {
            title: 'Scene Heading',
            icon: '<img id="custom-tool" src="img/tools/film.png"></img>',
        }
    }

    render() {
        var actionElement = document.createElement('div');
        actionElement.setAttribute('class', 'scene-heading cdx-block');
        actionElement.contentEditable = true;
        actionElement.focus();
        return actionElement;
    }
}

// ----------------------------------

// Init the editor with appropriate custom tools applied.
const editor = new EditorJS({
    autofocus: true,
    tools: {
        // Custom tools inserted here.
        // 'paragraph' is the editorjs default tool, which I've replaced with ActionTool.
        paragraph: ActionTool,
        scene : {
            class: SceneTool,
            // Not permanent binding, just a test.
            shortcut: 'CTRL+E'
        }
    }
});
