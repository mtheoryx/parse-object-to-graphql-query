// console.log('\033[2J');

const Query = require('graphql-query-builder');

const documents = new Query('documents', { category: '510k' });
const category = new Query('category');
const currentRevision = new Query('currentRevision');

// category.find(['displayName']);
// currentRevision.find(category);
documents.find(['name', currentRevision.find(category.find(['displayName']))]);

const res = `{` + `${documents}` + `}`;
console.log(res);

// Desired Result
// `{
//     documents(category: "510k") {
//         name
//         currentRevision {
//             category {
//                 displayName
//             }
//         }
//     }
// }`;
