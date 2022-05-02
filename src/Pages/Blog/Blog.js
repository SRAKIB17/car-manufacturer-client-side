import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='m-4 bolgs'>
            <div>
                <h4 className='text-center'><b>Q1:</b> Difference between javascript and nodejs</h4>
                <table className='table table-striped markdown-table m-4 table-hover'>
                    <thead>
                        <tr>
                            <th>Javascript</th>
                            <th>NodeJs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>It is a programming language  that is used website </td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>It can only run browsers</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>
                            <td>It used on the client side</td>
                            <td>It is mostly used on the server side</td>
                        </tr>
                        <tr>
                            <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                            <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='m-4'>
                <h4><b>Q2:</b> When should you use nodejs and when should you use mongodb</h4>
                <div>
                    <p>
                        <b>When should we use Nodejs?</b><br />

                        Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                        So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
                        <br />
                    </p>
                    <hr/>
                    <p>
                        <b> When should we use MongoDB?</b><br />

                        If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
                    </p>
                </div>
            </div>
            <div className='m-4'>
                <h4 className='text-center m-4'>
                    <b>Q3:</b> Differences between sql and nosql databases.
                </h4>
                <table class="table table-striped markdown-table table-hover m-4">
                    <thead>
                        <tr>
                            <th></th>
                            <th>SQL Databases</th>
                            <th>NoSQL Databases</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data Storage Model</td>
                            <td>Tables with fixed rows and columns</td>
                            <td>Document:  JSON documents, Key-value:  key-value pairs, Wide-column:  tables with rows and dynamic columns, Graph:  nodes and edges</td>
                        </tr>
                        <tr>
                            <td>Development History</td>
                            <td>Developed in the 1970s with a focus on reducing data duplication</td>
                            <td>Developed in the late 2000s with a focus on scaling and allowing for rapid application change driven by agile and DevOps practices.</td>
                        </tr>
                        <tr>
                            <td>Examples</td>
                            <td>Oracle, MySQL, Microsoft SQL Server, and PostgreSQL</td>
                            <td>Document:  MongoDB and CouchDB, Key-value:  Redis and DynamoDB, Wide-column:  Cassandra and HBase, Graph:  Neo4j and Amazon Neptune</td>
                        </tr>
                        <tr>
                            <td>Primary Purpose</td>
                            <td>General purpose</td>
                            <td>Document:  general purpose, Key-value:  large amounts of data with simple lookup queries, Wide-column:  large amounts of data with predictable query patterns, Graph:  analyzing and traversing relationships between connected data</td>
                        </tr>
                        <tr>
                            <td>Schemas</td>
                            <td>Rigid</td>
                            <td>Flexible</td>
                        </tr>
                        <tr>
                            <td>Scaling</td>
                            <td>Vertical (scale-up with a larger server)</td>
                            <td>Horizontal (scale-out across commodity servers)</td>
                        </tr>
                        <tr>
                            <td>Multi-Record ACID Transactions</td>
                            <td>Supported</td>
                            <td>Most do not support multi-record ACID transactions.  However, some—like MongoDB—do.</td>
                        </tr>
                        <tr>
                            <td>Joins</td>
                            <td>Typically required</td>
                            <td>Typically not required</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='m-4'>
                <h4>
                    <b>Q4:</b>   What is the purpose of jwt and how does it work
                </h4>

                <div>
                    <h5><b>Q:</b> How JWT Works?</h5>
                    <b>Answer: </b>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    <br />
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    <br />
                    Once decoded, you will get two JSON strings:,<br />

                    <ol>
                        <li>The <b> header</b> and <b>the payload</b>.</li>
                        <li>The <b> signature</b>.</li>
                    </ol>
                    The <b>JOSE (JSON Object Signing and Encryption) header </b> contains the type of token — JWT in this case — and the signing algorithm. <br />

                    The <b> payload </b> contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.<br />

                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.<br />

                    The <b> signature </b> ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </div>
                <hr />
                <div>
                    <b>What is the purpose of jwt</b><br />
                    JWTs are used as a secure way to authenticate users and share information.

                    Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.

                    Not all signing algorithms are created equal though. For example, some signing algorithms use a secret value that is shared between the issuer and the party that verifies the JWT. Other algorithms use a public and private key. The private key is known only to the issuer, while the public key can be widely distributed. The public key can be used to verify the signature, but only the private key can be used to create the signature. This is more secure than a shared secret because the private key only needs to exist in one place.

                    Because of this, the server does not need to keep a database with the information needed to identify the user. For developers, this is great news — the server that issues the JWT and the server that validates it do not have to be the same
                </div>
            </div>
        </div>
    );
};

export default Blog;