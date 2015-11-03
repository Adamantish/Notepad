== Objective:

# Practice these methods:

1. document.createElement()
2. document.appendChild()
3. document.removeChild()
4. document.setAttribute()
5. document.getElementById()
6. document.getElementsByTagName()

== TODO

1. Add a shape (of type box) to the X3D scene using Javascript functions

2. Refactor your code so that rather than adding a shape to
the scene, we append the shape to a <transform> element, with
the "translation" attribute set to x, y, z coordinates, e.g.
<transform translation="1 2 3"></transform>
And then add the transform to the scene. Observe the results!

3. Refactor your addShape function, so that we can pass a string called shape

4. Add a switch statement so that we detect one of 'foo', 'bar', 'fuzz' to map to 'box', 'sphere' or 'cone'

5. Add code to your switch, so that you create either a box,\
cone or sphere depending on the argument passsed, and add it
to a random position in the X3D scene.

6. Update your onclick attribute so that we randomly display
either a box, cone or sphere at a random position on the
screen. Google: find random element from array javascript