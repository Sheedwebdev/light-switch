export default function (plop) {
  // Generator: component
  plop.setGenerator('component', {
    description: 'Create a React component folder with index.js',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (e.g., Button):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.jsx',
        templateFile: 'plop-templates/Component.jsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.js',
        template: "export { default } from './{{name}}';",
      },
    ],
  });
}
