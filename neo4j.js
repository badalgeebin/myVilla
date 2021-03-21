// Require Neo4j
const neo4j = require('neo4j-driver');

// Create Driver
const driver = new neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "btp_1"));

// export driver to Express middleware or to any other
module.exports = driver;