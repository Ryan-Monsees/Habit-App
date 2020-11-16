using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class E_L_ZigZag : E_Move_Select
{

    public Rigidbody2D enemy;
    public E_Shoot enemy_barrel;


    // Sonic Speed!
    private float speed = 50.0f;

    // Holds array of points to curve around
    private Vector2[] point;

    // Used for swapping points
    private int nextPoint;

    // Check if going forwards or backwards
    private bool forward;

    IEnumerator Pause()
    {
        yield return new WaitForSeconds(1);

        // Sets the enemy's original position
        enemy.transform.position = new Vector2(point[0].x, point[0].y);
        Debug.Log("Enemy x value: " + enemy.transform.position.x);
        enemy_barrel.enabled = true;
        enabled = true;

    }
    // Use this for initialization
    void Awake()
    {
        // Temporarly disables movement (Update function)
        enabled = false;

        enemy = this.GetComponent<Rigidbody2D>();
        enemy_barrel = this.GetComponentInChildren<E_Shoot>();
        point = new Vector2[4];

        int rand = Random.Range(1, 3);
        Debug.Log("Rand: " + rand);
        if (rand == 1)
        {
            point[0] = new Vector2(-18, 15);
            point[1] = new Vector2(10, 15);
            point[2] = new Vector2(-10, 5);
            point[3] = new Vector2(18, 5);
        }
        else
        {
            point[0] = new Vector2(18, 15);
            point[1] = new Vector2(-10, 15);
            point[2] = new Vector2(10, 5);
            point[3] = new Vector2(-18, 5);
        }


        Debug.Log("Wait...");
        StartCoroutine(Pause());





        nextPoint = 1;
        forward = true;
    }





    // Update is called once per frame
    void Update()
    {
        float step = speed * Time.deltaTime;

        enemy.position = Vector2.MoveTowards(transform.position, point[nextPoint], step);

        if (enemy.position == point[nextPoint])
        {
            if (nextPoint == 0 || nextPoint == 3)
            {
                forward = !forward;
            }
            if (forward)
            {
                nextPoint++;
            }
            else
            {
                nextPoint--;
            }
        }
    }
}
