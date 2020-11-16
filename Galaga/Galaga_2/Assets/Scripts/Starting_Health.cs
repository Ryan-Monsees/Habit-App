using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Starting_Health : Player
{

    // Use this for initialization
    void Start()
    {
        float xSize = this.GetComponent<SpriteRenderer>().size.x;
        Debug.Log("Size of x:" + xSize);
        //this.transform.localScale = new Vector3(.5f, .5f, 1);
        xSize = this.GetComponent<SpriteRenderer>().size.x;
        Debug.Log("New Size:" + xSize);
    }

    // Update is called once per frame
    void Update()
    {

    }
}
