import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <p>What is a context Api?</p>
                <p>Basicaally context api is a way for produce global variable that can be passed around. for example if we want pass a data from grand parent to grandchild then it will go through the parents and then it will arived in grand child and then it will be accecable from them.but using context api the data will be direct passed from grandparents to grandchild.There is two side in this api one side is provider who provide the data and other one is consumer who accept ta data.So in my example grandparent is a provider and children is a consumer.</p>
            </div>
            <div>
                <p>What is  a Semantic tag?</p>
                <p>In erlier version of html there is no globally accepted names for structure eliments. So the develepors randomly use their own structure eliment. And this make website hard to define web page content correctly.When browser comunicate with the code then it look for some specifice content to disply webpage correctly. So the HTML5 introduce Sematic tag. For example header element define the header and it always visible at the top of the page.  </p>
            </div>
        </div>
    );
};

export default Blogs;