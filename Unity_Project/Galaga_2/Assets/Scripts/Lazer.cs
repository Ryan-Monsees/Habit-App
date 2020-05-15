using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Lazer : MonoBehaviour {

    private Transform player;
    
   
    

    private IEnumerator Stall()
    {
        yield return new WaitForSeconds(1);

        // Use Ray
       

        
        
        
        

    }

	// Use this for initialization
	void Start () {
        
        

        
       

        

        if (GameObject.FindGameObjectWithTag("player") != null)
        {
            player = GameObject.FindGameObjectWithTag("player").GetComponent<Transform>();
            
        }


        StartCoroutine(Stall());
       

	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
