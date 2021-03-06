const _ = require(`lodash`)
const crypto = require(`crypto`)

module.exports = function (node, key, text, mediaType, createNode) {
   /*  console.log('====================================');
    console.log(`mapping text:${text} type=>${typeof text}`);
    console.log('===================================='); */
    const str = _.isString(text) ? text : ` `
    const id = `${node.id}${key}MappingNode`
    const mappingNode = {
        id: id,
        parent: node.id,
        [key]: str,
        children: [],
        internal: {
            type: _.camelCase(`${node.internal.type} ${key} MappingNode`),
            mediaType: mediaType,
            content: str,
            contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(str))
                .digest(`hex`),
        },
    }

    node.children = node.children.concat([mappingNode.id])

    return mappingNode
}