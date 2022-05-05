import React from 'react';
import {Helmet} from 'react-helmet-async';
import './Blog.css'
const Blog = () => {
    return (
        <div className='m-4 bolgs'>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            
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
                    <hr />
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
                            <td>Examples</td>
                            <td>Oracle, MySQL, Microsoft SQL Server, and PostgreSQL</td>
                            <td>Document:  MongoDB and CouchDB, Key-value:  Redis and DynamoDB, Wide-column:  Cassandra and HBase, Graph:  Neo4j and Amazon Neptune</td>
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
                    <ol>
                        <li>Client login with username and password</li>
                        <li>Server creates a token for the client</li>
                        <li>Server sends a token to the client</li>
                        <li>Client stores the token on either local storage or browser cookies</li>
                        <li>Next time client makes a request a copy of the token is send to the sever for authorization</li>
                        <li>Server verifies the JWT signature before giving the authorization</li>
                        <li>Server responds to the client’s request</li>
                    </ol>
      	

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


                </div>
            </div>
        </div>
    );
};

export default Blog;