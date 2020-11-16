using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Health_Bar : MonoBehaviour {

    private SpriteRenderer bar;
    private Vector3 currentScale;
    private float currentSize;

    // Lost health
    public void takeDamage(int maxHealth, int damage)
    {
        float ratio = damage * currentScale.x / maxHealth;
        Debug.Log("Ratio for scale: " + ratio);
        this.transform.localScale += new Vector3(-ratio, 0, 0);
        ratio = (float)damage / (float)maxHealth * 2.0f;
        Debug.Log("Ratio for position: " + ratio + " damage: " + damage + " maxHealth: " + maxHealth);
        this.transform.localPosition += new Vector3(-ratio, 0, 0);
    }

    public void resetHealth()
    {
        this.transform.localScale = new Vector3(5, 1, 1);
        this.transform.localPosition = new Vector3(0, 0, 0);
    }
    // Use this for initialization
    void Start () {
        bar = this.GetComponent<SpriteRenderer>();
        currentScale = this.transform.localScale;
        currentSize = this.GetComponent<SpriteRenderer>().bounds.size.x;
       
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
