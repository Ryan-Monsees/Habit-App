using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class E_Curve : E_Move_Select
{

    public Rigidbody2D enemy;
    public E_Shoot enemy_barrel;
    // Holds array of points to curve around
    private Vector3[] point;

    // Used for swapping points
    private Vector3 tempPoint;

    float count = 0.0f;

    IEnumerator Pause()
    {
        yield return new WaitForSeconds(1);

        //Enables shooting
        enemy_barrel.enabled = true;
        enabled = true;
    }

    // Use this for initialization
    void Awake()
    {

        // Temporarly disables movement
        enabled = false;

        enemy = this.GetComponent<Rigidbody2D>();
        enemy_barrel = this.GetComponentInChildren<E_Shoot>();
        point = new Vector3[3];

        // Chooses which side to start on
        int rand = Random.Range(1, 3);
        if (rand == 1)
        {
            point[0] = new Vector3(-18, 7, 0);
            point[2] = new Vector3(18, 7, 0);
        }
        else
        {
            point[2] = new Vector3(-18, 7, 0);
            point[0] = new Vector3(18, 7, 0);
        }



        point[1] = point[0] + (point[2] - point[0]) / 2 + Vector3.up * 15.0f; // Play with 10.0 to change the curve


        StartCoroutine(Pause());

    }







    // Update is called once per frame
    void Update()
    {
        if (count < 1.0f)
        {
            // Number after count is speed of curve
            count += .25f * Time.deltaTime;

            Vector3 m1 = Vector3.Lerp(point[0], point[1], count);
            Vector3 m2 = Vector3.Lerp(point[1], point[2], count);
            enemy.position = Vector3.Lerp(m1, m2, count);
        }
        else
        {
            count = 0;
            tempPoint = point[0];
            point[0] = point[2];
            point[2] = tempPoint;
        }


    }
}
