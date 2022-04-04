import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-3 gap-4 font-serif'>
            <div>
                <p className='font-bold py-9 pl-9'>What is a context Api?</p>
                <p className='pl-4'>Basicaally context api is a way for produce global variable that can be passed around. for example if we want pass a data from grand parent to grandchild then it will go through the parents and then it will arived in grand child and then it will be accecable from them.but using context api the data will be direct passed from grandparents to grandchild.There is two side in this api one side is provider who provide the data and other one is consumer who accept ta data.So in my example grandparent is a provider and children is a consumer.</p>
            </div>
            <div>
                <p className='font-bold py-9 pl-9'>What is  a Semantic tag?</p>
                <p >In erlier version of html there is no globally accepted names for structure eliments. So the develepors randomly use their own structure eliment. And this make website hard to define web page content correctly.When browser comunicate with the code then it look for some specifice content to disply webpage correctly. So the HTML5 introduce Sematic tag. For example header element define the header and it always visible at the top of the page.  </p>
            </div>
            <div>
                <p className='font-bold py-8 pl-9'>Difference between inline block and inline block element</p>
                <p>
                    A block level element always starts a new line and the browser automatically add some space and margin of that line . it useally take the full line (left and right width ) of an web page.Two commonly used inline block element are paragrarph element and div element .
                    display : inline-block allows to set height width of an element and its allow top and the bottom margin respected to display : inline and the major problem with display inline block it dosent added line breake so element can sit to the next of others
                </p>
            </div>
        </div>
    );
};

export default Blogs;